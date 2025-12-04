
document.addEventListener('alpine:init', () => {
    Alpine.data('userdata', () => (
        {
            Users: [] ,
            isloading : false,
            getUsers() {
                this.isloading = true 
                axios.get("https://jsonplaceholder.typicode.com/users")
                    .then( (res)=>{
                       
                        this.Users = res.data 
                        this.isloading = false
                        console.log(res)
                    })
            }
        }
    ))
})

//         message: 'yes',
//         testFunc: () => {
//             alert('function started')
//         },
//         test2Func() {
//             alert(this.message)
//         }