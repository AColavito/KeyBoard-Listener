pageextension 50133 "Sales Order Extension" extends "Sales Order"
{
    layout
    {
        addbefore(General)
        {
            usercontrol(Listener; "Listener")
            {
                ApplicationArea = All;

            }
        }
    }
}