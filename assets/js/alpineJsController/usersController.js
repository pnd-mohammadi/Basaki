
document.addEventListener('alpine:init', () => {
    Alpine.data('userdata', () => (
        {
            Users: [],
            pageUsers: [],
            pageCount: 1,
            itemsCount: 4,
            currentPage: 1,
            isloading: false,
            showAddModal: false,
            getUsers() {
                this.isloading = true
                   axios.get("https://jsonplaceholder.typicode.com/users") 
                    .then((res) => {
                        this.Users = res.data
                        this.pagination()
                        console.log(res)
                    }).finally(() => {
                        this.isLoading = false
                    })
            },
            pagination() {
                this.pageCount = Math.ceil(this.Users.length / this.itemsCount) // 10 / 4 = 3
                let start = (this.currentPage * this.itemsCount) - this.itemsCount  // 0
                let end = this.currentPage * this.itemsCount // 4
                this.pageUsers = this.Users.slice(start, end)
                console.log(this.pageUsers)
            },
            nextPage(){
                this.currentPage ++
                this.pagination()
            },
            prevPage(){
                this.currentPage --
                this.pagination()
            }

        }
    ))
})

/*          message: 'yes',
        testFunc: () => {
             alert('function started')
        },
         test2Func() {
             alert(this.message)
         }


         getUsers() {
                this.isloading = true 
                axios.get("https://jsonplaceholder.typicode.com/users")
                    .then( (res)=>{                       
                        this.Users = res.data 
                        this.isloading = false
                        console.log(res)
                    })
            } */