import './Test.css';

let Test =({name, year})=>{
    let clicked: false;
    let following: false;
    function onClicked (){
        this.clicked = !clicked;
    }
    function onFollow(){
        this.following = !following;
    }
    return (
        <div>
        <h1>Test React Component</h1>
        <h3>Prepared By:  {name} <br/> Year: {year}</h3>

        <i class="ri-message-3-line"></i>
        {clicked ? <i class="ri-heart-2-fill" onClick={onClicked}></i>:<i class="ri-heart-3-line" onClick={onClicked}></i>}

        <button type="submit" onClick={onFollow}>{following ? <p>Unfollow</p> :<p>Follow</p>}</button>
        </div>
        );
}

export default Test;