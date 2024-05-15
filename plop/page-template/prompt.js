module.exports = {
  description: 'create a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter page name，such as "user/login" :',
      validate (value) {
        if (!value || value.trim === '') {
          return 'name is required';
        }
        return true;
      },
    }
  ],
  actions: (data) => {
    const dataName = data.name
    const paths = dataName.split('/')
    let relativePath = ''
    for(let i = 0;i<paths.length-1;i++){
      relativePath = paths[i]+'/'
    }
    const filename = paths[paths.length-1]

    const actions = [
      {
        type: 'add',
        path: `${process.cwd()}/src/views/${relativePath}${filename}.vue`,
        templateFile: './page-template/index.hbs',
        data: {
          name: data.name,
          filename,
        }
      },
    ]
    
    return actions
  }
}