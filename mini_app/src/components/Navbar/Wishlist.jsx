import React from 'react'

const Wishlist = () => {
 const datafromstorage= JSON.parse(localStorage.getItem("wishlistitems")) || []
 console.log(datafromstorage)
  return (
    <div className='table'>
      {datafromstorage.length > 0 ? (
        <table border="0" cellPadding="10" cellSpacing="0" style={{ width: '80%', margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              {/* <th>Prep Time (mins)</th>
              <th>Cook Time (mins)</th>
              <th>Servings</th> */}
            </tr>
          </thead>
          <tbody>
            {datafromstorage.map((citem, index) => (
              <tr key={index}>
                <td>{citem.id}</td>
                <td>{citem.name}</td>
                <td>
                  <img src={citem.image} alt={citem.name} width="100" className='cartimg' />
                </td>
                {/* <td>{citem.prepTimeMinutes}</td>
                <td>{citem.cookTimeMinutes}</td>
                <td>{citem.servings}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )  : (
        <p>Your wishlist is empty</p>
      )}
    </div>
  );
};

export default Wishlist;