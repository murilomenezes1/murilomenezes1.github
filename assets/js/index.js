document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://portfolio-19d97.firebaseio.com/')

  db.download('/', function(data) {
    context = data['projetos']
    console.log(context)
    //coDesReplace('.container', context)
    coDesReplace('.header', context)
    coDesReplace('.parent', context)
  })
})
