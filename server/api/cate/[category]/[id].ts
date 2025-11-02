export default defineEventHandler(async (event) => {
  
  const  cat = event.context.params
  console.log(cat)
  const res = await $fetch(`https://filmyapp-e1005.firebaseio.com/news/${cat.category}/data/${cat.id}.json?orderBy="$key"&limitToLast=12`)
  if (!res) return []
  return res

})