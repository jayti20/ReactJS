import React,{Component} from 'react'
import './newtonForm.css'
const heading={color:'red', fontSize:12}
class NewtonForm extends Component{
   constructor()
   {
     super()
     this.state={
         prodname:'',
         prodnameError:'',
         proddescription:'',
         proddescriptionError:'',
         prodprice:'',
         prodpriceError:'',
         allValid:true,

         
     }
   }
  handleChange=(event)=>{
      

    this.setState({
        prodname:event.target.value
    })

    /*if(this.state.prodname.match(/^[A-Za-z]+$/))
      {
          this.setState({
              prodnameError:'',
              
          })
      }
      else
      {
          this.setState({
              prodnameError:'*Product name should contain letters only',
              
          })
      }*/

  }
  handleChangeProddesc=(event)=>{
      this.setState({
          proddescription:event.target.value
      })

     /* if(this.state.proddescription.match(/^[A-Za-z]+$/))
      {
          this.setState({
              proddescriptionError:''
          })
      }
      else
      {
          this.setState({proddescriptionError:'*Product dexcription should contain letters only'})
          
      }*/
  }

  handleChangedPrice=(event)=>{
 this.setState({
     prodprice:event.target.value
 })
  }
  handleSubmit=(event)=>{
      
      alert(`${this.state.prodname}`)
      if(this.state.prodname.match(/^[A-Za-z]+$/))
      {
          this.setState({
              prodnameError:'',
              
          })
      }
      else
      {
          this.setState({
              prodnameError:'*Product name should contain letters only',
              
          })
      }
      if(this.state.proddescription.match(/^[A-Za-z]+$/))
      {
          this.setState({
              proddescriptionError:''
          })
      }
      else
      {
          this.setState({proddescriptionError:'*Product description should contain letters only'})
          
      }
      if(this.state.prodprice.match(/^[0-9]+$/))
      {
          this.setState({
              prodpriceError:''
          })
      }
      else
      {
          this.setState({
              prodpriceError:'*product price should contain numbers only'
          })
          
      }
      if(this.state.prodnameError===null && this.state.proddescriptionError===null &&this.state.prodpriceError===null)
      {
          this.setState({
              allValid:true
          })
      }
      else{
          this.setState({
              allValid:false
          })
      }
      event.preventDefault();
    }
 
   render()
   {
       return(
      <>
      <form className='divi'>
      <div className='input'>
      <div style={heading}>{this.state.prodnameError}</div>
      <label>Product name</label>
      <input type="text" value={this.state.prodname} onChange={this.handleChange}></input>
      </div>
      
      
     <div className='input'>
      <div style={heading}>{this.state.proddescriptionError}</div>
      <label>Product Description</label>
      <textarea value={this.state.proddescription} onChange={this.state.proddescriptionError} onChange={this.handleChangeProddesc}></textarea>
      </div>

      <div className='input'>
      <div style={heading}>{this.state.prodpriceError}</div>
      <label>Product price</label>
      <input type="text" value={this.state.prodprice} onChange={this.handleChangedPrice}></input>
      </div>
      
     <div className='submit'>
     <button type="submit"   onClick={this.handleSubmit}>Submit</button>
     {this.state.allValid?(<div></div>):<div style={heading}>*One or more fields are missing or inappropriate</div>}
     </div>
     </form>
      
      </>
       )
   }
}
export default NewtonForm