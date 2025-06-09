import  {data}  from './Recepiesdata.jsx'
import Recepie from './Recepie.jsx'
// import './Product.css'

const Recepies = () => {
  return (
    <div className='allproduct'>
        {
           data.recipes.map((p)=>{
            return (
                <div key={p.id}>
                    <Recepie singlep={p}/>
                </div>
            )
           })
        }
    </div>
  )
}

export default Recepies