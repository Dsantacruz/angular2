import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {Router, RouteParams} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";

@Component({
	templateUrl : "./app/view/crear-pelicula.html",
	providers: [PeliculasService] 
})

export class CrearPeliculaComponent implements OnInit{
	public TituloPelicula = "";
	
	constructor(
		private _peliculasService: PeliculasService, 
		private _router: Router,
		private _routeParams: RouteParams)
	{

	}

	onCrearPelicula(titulo, director, anio)
	{
		let pelicula: Pelicula = new Pelicula(77, titulo, director, anio);
		this._peliculasService.insertPelicula(pelicula);
		//console.log(pelicula);

		this._router.navigate(["Peliculas"]);

	}

	ngOnInit():any
	{
		this.TituloPelicula = this._routeParams.get("titulo");
	}

}