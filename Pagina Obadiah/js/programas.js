
 

/* Evento de toque
Al tocar la instancia del símbolo, se ejecuta una función a la que puede añadir su código personalizado.

Instrucciones:
1. Añada el código personalizado en una nueva línea después de la línea que dice "// Inicio del código personalizado" más abajo.
El código se ejecutará al tocar la instancia del símbolo.
*/

Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;

movieClip_1.addEventListener(TouchEvent.TOUCH_TAP, fl_TapHandler_2);

function fl_TapHandler_2(event:TouchEvent):void
{
	// Inicio del código personalizado
	// Este código de ejemplo reduce la transparencia del objeto a la mitad con cada evento de toque
	movieClip_1.alpha *= 0.5;
	// Fin del código personalizado
}


  
		
			
			

