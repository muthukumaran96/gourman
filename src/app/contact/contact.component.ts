import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../css/css.component.css']   
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false; 
 
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],      
        number: ['', Validators.required],  
        email: ['', [Validators.required, Validators.email]] 
    });
 
   }
 
  ngOnInit() {  
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {    
    this.submitted = true; 
    if (this.registerForm.valid) { 
        console.log(this.registerForm.value);   
       this.http.post('http://localhost:3000/post',this.registerForm.value).subscribe(
            (response) => console.log(response),    
            (error) => console.log(error)     
          )      
        };   


    // var formData: any = new FormData();
    // formData.append("name", this.registerForm.get('name').value);
    // formData.append("number", this.registerForm.get('number').value);
    // formData.append("email", this.registerForm.get('email').value);  

 
    // this.http.post('http://localhost:4200/routes/index', JSON.stringify(this.registerForm.value)).subscribe(
    //   (response) => console.log(response),    
    //   (error) => console.log(error) 
    // )  
    // stop here if form is invalid
    // if (this.registerForm.invalid) { 
    //     return;
    // }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  } 
}
 