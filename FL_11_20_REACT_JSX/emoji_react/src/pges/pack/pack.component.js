import React from 'react';

import {Emoji} from './emoji';
import {Button} from './button';
import {Logo} from './logo';
import classes from './pack.module.scss';
import {API} from "../../constants/api.constants.js";
import {Busket} from '../../shared/components';
import {Titles} from '../../shared/components';

export default class Pack extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            emoji: [],
        }
       
       
    }
    
    componentDidMount() {
        fetch(API)
        .then(response => response.json()) 
        .then(data => {
            let emojiObj = data.emoji;
            console.log(emojiObj);
            this.setState({emoji: emojiObj});
        }) 
    }


    renderEmoji(emoji) {
        let {id, title, stars, price, ...picObj} = emoji;
        let emojiPic = picObj.emoji;
        emojiPic = emojiPic.slice(0, 3);
        emojiPic = emojiPic.map(emoji => emoji.char);
        return (
            <div className={classes.myLogoItem}>
                <div className={classes.myLogo}>
                    <Logo 
                        char = {emojiPic[0]}
                     />    
                </div>
                <div>
                    <Emoji
                        key = {emoji.id}
                        id = {emoji.id}
                        title = {emoji.title}
                        stars = {emoji.stars}
                    />
                </div>
            
                <div>
                    <Button 
                        key = {emoji.id+5}
                        title = "GET" 
                        value = {emoji.price}
                    />
                </div>
            </div>
        )
    }

    renderEmojiForPack(emoji) {
        let {id, title, stars, price, ...picObj} = emoji;
        let emojiPic = picObj.emoji;
        let emojiPic3 = emojiPic.slice(0, 3);
        console.log(emojiPic3);
        emojiPic = emojiPic.map(emoji => emoji.char);
        console.log(emojiPic);
        return (
            <Logo
                char = {emojiPic[0]}
            /> 
        ) 
    }



    render() {
        if (this.state.emoji.length === 0) {
            return <p>Loading...</p>
        }
        return (
            
            <div>
                <div className={classes.myHeader}>
                <div className={classes.myTitles}>
                    <div>
                        <Titles
                            title = 'Reptilies pack!'
                        />
                    </div>
                    <h4 className={classes.includesText}>Includes</h4>
                    <div className={classes.myIncludes}>
                        {this.state.emoji
                            .map(this.renderEmojiForPack)
                            .slice(0, 3)
                        }
                    </div> 
                    <div className={classes.headerButton}>
                        <Button 
                            title = "GET" 
                            value = "1.5"
                        />
                    </div>  
                </div>
                <div className={classes.myBusket}>
                    <Busket
                         totalPrice = '5'
                    />
                </div>
                </div>

               
                <div className={classes.myEmoji}>
                    {this.state.emoji
                        .map(this.renderEmoji)
                    }
                </div>
            </div>
        
        )
        
    }  
}