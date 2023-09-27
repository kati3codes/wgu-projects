import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    let countryPaths = document.querySelectorAll<SVGPathElement>('path');

    Array.prototype.forEach.call(countryPaths, (country: SVGPathElement) => {

      country.addEventListener('mouseover', (event: MouseEvent) => {
        const path = event.target as SVGPathElement;
        path.style.fill = 'pink';
      });

      country.addEventListener('mouseleave', (event: MouseEvent) => {
        const path = event.target as SVGPathElement;
        path.style.fill = 'grey';
      });

      country.addEventListener('mouseover', () => {
        this.runApi(country);
      });

      country.addEventListener('mouseleave', () => {
        this.clearData(country);
      });

    });


  }

  async runApi(country: SVGPathElement) {
    let url: string = 'https://api.worldbank.org/V2/country/'+country.id+'?format=json';
    let ans: Response = await fetch(url);
    let countryData: any = await ans.json();
    let dataPath: any = countryData[1];

    let name: string = dataPath[0].name;
    document.getElementById('name')!.innerText = name;

    let region: string = dataPath[0].region.value;
    document.getElementById('region')!.innerText = region;

    let income: string = dataPath[0].incomeLevel.value;
    document.getElementById('income')!.innerText = income;

    let capital: string = dataPath[0].capitalCity;
    document.getElementById('capital')!.innerText = capital;

    let longitude: string = dataPath[0].longitude;
    document.getElementById('longitude')!.innerText = longitude;

    let latitude: string = dataPath[0].latitude;
    document.getElementById('latitude')!.innerText = latitude;

  }

  clearData(country: SVGPathElement) {

    document.getElementById('name')!.innerText = '';

    document.getElementById('region')!.innerText = '';

    document.getElementById('income')!.innerText = '';

    document.getElementById('capital')!.innerText = '';

    document.getElementById('longitude')!.innerText = '';

    document.getElementById('latitude')!.innerText = '';
  }
}

