export async function loadMembers() {
    const res = await fetch(`${process.env.INTERNAL_URL}/api/members`)
    const data = await res.json()
    return data 
}