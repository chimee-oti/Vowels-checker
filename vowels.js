
const vowels_checker = ()=>{

    const input = document.querySelector(".word-input");
    const submit_btn = document.querySelector(".btn");

    submit_btn.addEventListener("click",function(e){
        e.preventDefault()
        user_word = input.value
        //console.log(user_word)
        input.value = ""
        lets_check();

    });

    const lets_check = ()=>{
        all_vowels = ["a","e","i","o","u"];
            vowels = [];
        for(letter of user_word){
            
            if((all_vowels.indexOf(letter)>-1) &&! (vowels.indexOf(letter)>-1)){
                vowels.push(letter);
                console.log(vowels.length)
            }
        }
        alert(`They are ${vowels.length} vowel(s) in ${user_word}`)
    }
    



}

vowels_checker();

