function solution(record) {
    let answer = [];
    const users = {};
    const comment = {
        Enter: "들어왔습니다.",
        Leave: "나갔습니다."
    }
    
   record.map((msg) => {
       const [state, id, name] = msg.split(" ");
       
       if(name) users[id] = name;
       if(state !== 'Change') answer.push([id, state]);
       
   }) 
    
    return answer.map(([id, state]) => `${users[id]}님이 ${comment[state]}`);
}
