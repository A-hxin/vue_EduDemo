#!/bin/bash

case "$1" in
  start)
    # 启动本地API
    json-server --watch db.json --port 3004 &
    
    # 启动 npm run dev
    npm run dev &
    
    echo "脚本已启动"
    
    # 打开默认浏览器
    open "http://localhost:5173/"
    ;;
  
  stop)
    # 关闭 3005 端口
    lsof -ti :3005 | xargs kill -9
    
    # 关闭 npm 进程
    npm_pid=$(pgrep -f "npm run dev")
    if [ -n "$npm_pid" ]; then
      kill -9 "$npm_pid"
    fi
    
    # 关闭 json-server 进程
    json_server_pid=$(pgrep -f "json-server --watch db.json --port 3004")
    if [ -n "$json_server_pid" ]; then
      kill -9 "$json_server_pid"
    fi
    
    echo "脚本已停止"
    ;;

  *)
    echo "Usage: $0 {start 启动 | stop 停止}"
    exit 1
    ;;
esac

exit 0

