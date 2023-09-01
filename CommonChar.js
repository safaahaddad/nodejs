const get_common_characters = (str1, str2) => {

    const set1 = new Set(str1.split(''))
    const set2 = new Set(str2.split(''))
    const result = []

    for (let char of set1.values()) {
        if (set2.has(char)) result.push(char)
    }
    console.log(result.join(''))
}

get_common_characters('acexivou', 'aegihobu')