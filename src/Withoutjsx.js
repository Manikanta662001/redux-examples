// eslint-disable-next-line
import React,{createElement} from 'react'

const Withoutjsx = () => {
//   return (
//     <div className='dummyClass'>
//         <h1>Withjsx</h1>
            //<h2>second</h2>
//     </div>
//   )
return createElement('div',{className:'dummyClass',id:'demo'},
        [
            createElement('h1',{style:{color:'red',backgroundColor:'cyan'}},'with out jsx'),
            createElement('h2',null,'second line')
        ])
}
export default Withoutjsx
