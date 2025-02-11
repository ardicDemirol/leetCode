/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const magazineMap = new Map();
    const ransomMap = new Map();

    for (let i = 0; i < magazine.length; i++) {
        const tempMagazine = magazine[i];
        magazineMap.set(tempMagazine, (magazineMap.get(tempMagazine) ?? 0) + 1);
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const tempRansomNote = ransomNote[i];
        ransomMap.set(tempRansomNote, (ransomMap.get(tempRansomNote) ?? 0) + 1);
        if (ransomMap.get(tempRansomNote) > (magazineMap.get(tempRansomNote) ?? 0)) return false;
    }

    return true;
};