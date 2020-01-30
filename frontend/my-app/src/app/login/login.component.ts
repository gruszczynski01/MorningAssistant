import { Component, OnInit } from "@angular/core";
import { MainService } from "../services/main.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    console.log(sessionStorage.getItem("token"));
  }
  login() {
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
    this.mainService.getToken(this.username, this.password).subscribe(
      data => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        // sprawdzenie czy token jest okay - zaladownaie danych uzytkownika (jakis end point np /api/v1/me)
        this.router.navigate(["/home"]);
        // tslint:disable-next-line: max-line-length
        // moze dobrze zrobic tez sprawdzenie przy ladowaniu home, zeby nie mozna bylo tam wejsc niezalogowanym, albo w html if, z ifno, zeby sie zalogowac, sprawdzenie w ng init
      },
      (error: any) => {
        this.username = "";
        this.password = "";
      }
    );
  }
  register() {
    this.router.navigate(["/register"]);
  }
}
