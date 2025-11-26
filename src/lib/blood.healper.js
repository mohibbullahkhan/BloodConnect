export async function fetchData(id) {
  const res = await fetch(
    `https://blood-connect-pi-cyan.vercel.app/bloods/${id}`
  );
  const result = await res.json();
  return result;
}
