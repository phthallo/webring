export async function loadMembers() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/members`)
    const data = await res.json()
    return { ...data }
}