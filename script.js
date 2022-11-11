let x = 'Lorem ipsum dollar'
function noSpace(x){
  console.log(x.replace(/ /g, ''))
  return x
}
noSpace('Lorem ipsum dollar');