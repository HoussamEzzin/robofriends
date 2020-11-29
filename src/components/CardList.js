import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return (
        <div>
            {   /*this is the CardArrays variable in much cleaner way :
                instead of creating the variable and then use it here we use it directly*/
                robots.map((user, i) => { 
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;