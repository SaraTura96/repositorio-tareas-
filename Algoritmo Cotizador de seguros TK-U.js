Algoritmo: Cotizador de seguros TK-U
Defino las variables

1.1 Definir precio base
1.2 Definir edades
1.3 Definir estado civil
1.4 Definir la cantidad de hijos
1.5 Definir el recargo del asegurado
1.6 Definir el recargo del conyuge
1.7 Definir el recargo de los hijos
1.8 Definir el total

ENTRADAS

2.1 Leer nombre
2.2 Leer edad del asegurado 
2.3 Leer estado civil 
2.4 Leer edad del conyuge 


DESICIÓN 1: Verifico mayoría de edad

3 ¿El asegurado es mayor o igual a 18 anos?

SI (edad del Asegurado >= 18)→ Continuar

NO → Mostrar el mensaje: "No puede asegurarse por ser menor de edad" y FINALIZAR 

DECISIÓN 2: ¿Esta casado? 
5. Leer estado civil
 
6. ¿Esta casado? 

NO → recargo conyuge = 0

SI → 6.1 Leer edad del conyuge 
Evaluar edad del conyuge: 

Si edad entre 18 y 24 
→ recargo del asegurado = precio base * 0.10 

Si edad esta entre 25 y 49
→ recargo del asegurado = precio base * 0.20 

Si edad es 50 o mas 
→ recargo Asegurado = precio base * 0.30 

DECISIÓN 3: Hijos 

7. Leer cantidad de Hijos 

8. ¿Tiene hijos? 

NO (0 hijos)
→recargo Hijos=0 

SI (>0 hijos) 
recargo Hijos = cantidad de Hijos* (precio base *0.20) 

CALCULO FINAL 

9. Calcular total 

SALIDA 

10. Mostrar resultados 

10.1 Mostrar recargo del asegurado
10.2 Mostrar recargo del conyuge
10.3 Mostrar recargo por hijos 
10.4 Mostrar precio total 

puntos extras agregar propiedades por el 35% del recargo sobre el precio base
pedir la palabra salir para terminar la cotización de lo contrario enter

FIN
