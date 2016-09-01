var FKeyPad = document.Keypad;
             var Accumulate = 0;
             var FlagNewNum = false;
             var PendingOp = "";
             function NumPressed (Num) {
                 if (FlagNewNum) {
                     FKeyPad.result.value  = Num;
                     FlagNewNum = false;
                 }
                 else {
                     if (FKeyPad.result.value == "0")
                         FKeyPad.result.value = Num;
                     else
                         FKeyPad.result.value += Num;
                 }
             }
             function Operation (Op) {
                 var Readout = FKeyPad.result.value;
                 if (FlagNewNum && PendingOp != "=");
                 else
                 {
                     FlagNewNum = true;
                     if ( '+' == PendingOp )
                         Accumulate += parseFloat(Readout);
                     else if ( '-' == PendingOp )
                         Accumulate -= parseFloat(Readout);
                     else if ( '/' == PendingOp )
                         Accumulate /= parseFloat(Readout);
                     else if ( '*' == PendingOp )
                         Accumulate *= parseFloat(Readout);
                     else
                         Accumulate = parseFloat(Readout);
                     FKeyPad.result.value = Accumulate;
                     PendingOp = Op;
                 }
             }
             function Decimal () {
                 var curresult = FKeyPad.result.value;
                 if (FlagNewNum) {
                     curresult = "0.";
                     FlagNewNum = false;
                 }
                 else
                 {
                     if (curresult.indexOf(".") == -1)
                         curresult += ".";
                 }
                 FKeyPad.result.value = curresult;
             }
             function ClearEntry () {
                 FKeyPad.result.value = "0";
                 FlagNewNum = true;
             }
             function Clear () {
                 Accumulate = 0;
                 PendingOp = "";
                 ClearEntry();
             }
             function Neg () {
                 FKeyPad.result.value = parseFloat(FKeyPad.result.value) * -1;
             }
             function Percent () {
                 FKeyPad.result.value = (parseFloat(FKeyPad.result.value) / 100) * parseFloat(Accumulate);
             }
             function DoExponent(){
   
               if ( Current.indexOf("e") == -1 )
                  { Current = Current + "e0";
                  document.result.value = Current;};
 
            }
