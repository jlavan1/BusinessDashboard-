export const userLoginFetch = user => {
    return dispatch => {
      return axios.post('/signin', {
        email: this.state.email,
        password: this.state.password,
  
    })
        .then(response => {
          console.log(response)
          localStorage.setItem('usertoken', response.data)
          dispatch(loginUser(data.user))
          return response.data
  
        }).catch(error=>{
            console.log('error')
            console.log(error)
        })
    }
}