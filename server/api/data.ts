


export default defineEventHandler(async () => {
  const res = await $fetch('https://filmyapp-e1005.firebaseio.com/news/all/data.json?orderBy="$key"&limitToLast=12')
  if (!res) return []
  const arr = Array.isArray(res) ? res : Object.values(res) // convert object -> array
  return arr.reverse()
})