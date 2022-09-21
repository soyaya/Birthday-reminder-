import React from 'react'

const List = ({people})=> {
  return (
    <fragment>
        {people.map((person)=>{
            const {id, image, age, firstName, middleName,lastName, gender, username, phone,email,birthDate}=person;
            return (
                <article key={id} className="list">
                    <img src ={image} alt = {username}/>
                    <div>
                        <h1><span>username</span>:{username}</h1>
                        <h1><span>Name</span>:{firstName} {middleName}  {lastName}</h1>
                        <h1>Age:{age}birthDate:{birthDate}</h1>
                        <h1>{phone} {email}</h1>
                        <h3>{gender}</h3>
                    </div>

                </article>

            );
        })}

    </fragment>
  );
}

export default List