<template>
     <div>
      <el-button @click="showAddDialog" type="primary">添加数据</el-button>
      <el-table :data="tableData" style="width: 100%" stripe>
        <!-- 列定义，根据你的数据结构进行调整 -->
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="value" label="数值"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
</template>
        </el-table-column>
      </el-table>
  
      <!-- 添加数据对话框 -->
      <el-dialog :visible.sync="dialogVisible" title="添加数据">
        <!-- 表单，根据你的数据结构进行调整 -->
        <el-form :model="formData" ref="formData" :rules="formRules" label-width="80px">
          <el-form-item label="名称" prop="name">
            <el-input v-model="formData.name" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="数值" prop="value">
            <el-input v-model="formData.value" placeholder="请输入数值"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </div>
      </el-dialog>

      
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'Admin',
    data() {
      return {
        tableData: [], // 存储表格数据
        dialogVisible: false, // 控制添加数据对话框的显示与隐藏
        formData: {
          name: '',
          value: '',
        },
        formRules: {
          name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
          value: [{ required: true, message: '请输入数值', trigger: 'blur' }],
        },
      };
    },
    mounted() {
      this.loadData();
      window.alert('正在开发敬请期待！！！');
    },
    methods: {
      loadData() {
        // 从 JSON 服务获取数据
        axios.get('http://localhost:3004/L01Data')
          .then(response => {
            this.tableData = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      showAddDialog() {
        // 打开添加数据对话框
        this.dialogVisible = true;
      },
      handleEdit(row) {
        // 编辑数据，根据需求实现
        console.log('Edit:', row);
      },
      handleDelete(row) {
        // 删除数据，根据需求实现
        console.log('Delete:', row);
      },
      handleSubmit() {
        // 提交数据，根据需求实现
        // 这里可以使用 axios 将数据发送到后端进行保存
        console.log('Submit:', this.formData);
  
        // 关闭对话框
        this.dialogVisible = false;
  
        // 重新加载数据
        this.loadData();
      },
    },
  };
  </script>
  
  <style scoped>
  /* 这里的样式只会应用在当前组件中 */
  h1 {
    color: pink;
  }
  </style>