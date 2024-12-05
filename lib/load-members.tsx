export async function loadMembers() {
    const res = await fetch(`${process.env.INTERNAL_URL}/api/members`)
    const data = await res.json()
    return data 
}

export function getValues(index: number, membersCount: number){
    let iter = [...Array(membersCount).keys()]
    return iter[(index % iter.length + iter.length) % iter.length]
  }
  