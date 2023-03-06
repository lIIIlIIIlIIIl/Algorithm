function solution(nums) {
    let noDuplication = [];
    
    for(let i=0; i<nums.length; i++){
        if(!noDuplication.includes(nums[i])){
            noDuplication.push(nums[i])
        }
    }
    return noDuplication.length > (nums.length)/2 ? (nums.length)/2 : noDuplication.length
}