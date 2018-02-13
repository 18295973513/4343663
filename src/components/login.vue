<template>
    <form action="">
        
    </form>
</template> 
<script>
    import { mapActions,mapState } from 'vuex' 
    export default {
            name: 'Login',
            data(){
                return{
                    loginForm: {
                        username: '',
                        password: '',
                    },
                    rules: {
                        username: [
                            { required: true, message: '请输入用户名', trigger: 'blur' },
                        ],
                        password: [
                            { required: true, message: '请输入密码', trigger: 'blur' }
                        ],
                    },
                    showLogin: false
                }
            },
            mounted(){
                this.showLogin = true;
            },
            computed: {
                ...mapState(['isLogin'])
            },
            methods: {
                ...mapActions(['loginAction']),
                submitForm(formName){
                    this.$refs[formName].validate((valid) => {
                        if(valid){
                            if(this.loginForm.username == 'aaa' && this.loginForm.password == '111'){
                                console.log('验证通过');
                                this.loginAction();
                                this.$router.push('manage');
                            }else{
                                console.log('账号密码出错');
                                // this.$message.error('账号密码出错');
                                this.$message({
                                    type: 'error',
                                    message: '账号密码出错'
                                });
                            }
                            console.log('请求地址: ' + base_url);
                        }else{
                            console.log('验证失败');
                            return false;
                        }
                    })
                }
            }
        }
</script>
<style>
    
</style>