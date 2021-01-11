import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "autocomplete-example",
  templateUrl: "autocomplete-example.html"
})
export class AutocompleteExample {
  controlInput = new FormControl();
  options = [{ nom: "Italie" }, { nom: "France" }, { nom: "Espagne" }];
  filteredOptions: Observable<{ nom: string }[]>;

  ngOnInit() {
    this.filteredOptions = this.controlInput.valueChanges.pipe(
      startWith(""),
      map(value => this.filtrer(value))
    );
  }
  public filtrer(input: string | { nom: string }) {
    if (typeof input === "string") {
      return this.options.filter(option =>
        option.nom.toLowerCase().includes(input.toLowerCase())
      );
    }
  }

  public fonctionAffichage(option): string {
    return option ? option.nom : option;
  }
}
