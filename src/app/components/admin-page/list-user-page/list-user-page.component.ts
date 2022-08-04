import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../models/user";
import {UsersServices} from "../../../../services/users.services";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {tap} from "rxjs";
import {UserFormPageComponent} from "../user-form-page/user-form-page.component";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

const COLUMNS_SCHEMA = [
  {
    key: "document",
    label: "Documento"
  }, {
    key: "document_type",
    label: "Tipo"
  }, {
    key: "full_name",
    label: "Nombre"
  }, {
    key: "credentialId",
    label: "Correo"
  }, {
    key: "phone_number",
    label: "Telefono"
  }, {
    key: "city",
    label: "Ciudad"
  }, {
    key: "address",
    label: "Direccion"
  }, {
    key: "isEdit",
    label: "Acciones"
  }
]

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.css']
})
export class ListUserPageComponent implements OnInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  public dataSource: MatTableDataSource<User>;

  constructor(
    private usersService: UsersServices,
    public dialog: MatDialog
  ) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
    this.getUsers()
  }

  edit(data: User) {
    console.log(data)
    const dialogRef = this.dialog.open(UserFormPageComponent, {
      width: '60%',
      height: '100%',
      data: {edit:true,user:data}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //todo: conectar al servicio
        console.log(result)
      }
    });
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //todo: conectar al servicio
        console.warn(`Removido ${id}`)
      }
    });
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      tap(() => this.getUsers())
    ).subscribe()
  }

  getUsers() {
    this.usersService.getUsers().subscribe((response) => {
        this.dataSource = response.data;
    });
  }
}
