# JavaScript

<p>
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.
Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc).
</p>

## ¿Cómo nace Javascript?

<p>
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.
</p>

## valores 

### _valores primitivos_

<ol>
    <li> numericos = 40</li>   
    <li> string , definitos con "" o ''</li>   
    <li>booleado, false / true</li>   
    <li> Vacios, null / undefine</li>   
</ol>

### _valores objeto_

<ol>
    <li>
    definidos por [] , con contenido de valores primitivos
    </li>   
    <li>
    definidos por { nombre = 'Paula'}, por dentro un objeto 
    </li>    
</ol>

## Variables

<p>
para generar objetos 
</P>

## funciones

<p>
Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
</p>

<ol>
    <li>
    Declarativas
        <p> function mifuncion() {
            return 3;
        }</p>
        <p>_nombre de la funcion (parametros de la funcion), si no tiene parametros se deja los parentesis vacios </p>
    </li>   
    <li>
    De expresión o anonimas
        <p> var miFuncin = function () {
            return a + b;
        }</p>
        <p>funcion que se guarda en una variable</p>
    </li>    
</ol>

<p>Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.
Cada instrucción que tenga la función debe terminar con ; .
</p>

<span>
___console log__ imprime lo que queremos ver ejemplo: console.log(nombre variable o funcion), funcion del navegador
</span>

##

<span>
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
</span>


# Bases JavaScript

## Scope 

<p>Alcance que tienen las variables</p>

### ___Scope global___
<p>existen todas las variables, funciones y decmas declaradas, lo que esta en local no puede acceder desde global</p>

### ___Scope local___
<p>solo lo que esta dentro de la funcion, pero este puede tener acceso a las variables que estan en el scope global</p>

## Coerción 


<p>es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción</p>

<ol>
    <li>Coerción implícita</li>
        <span>es cuando el lenguaje nos ayuda a cambiar el tipo de valor.</span>
    <li>Coerción explicita</li>
        <span>es cuando obligamos a que cambie el tipo de valor.</span>
</ol>


## truthy y falsy 

<p>valores que por default son falsos y/o verdaderos</p>

<ol>
    Valores falsos (FALSE)
    <li>0</li>
    <li>NaN</li>
    <li>Null</li>
    <li>undefined</li>
    <li>false</li>
    <li>""</li> 
</ol>

<ol>
    Ejemplos en los que Boolean devuelve verdadero (TRUE)
    <li>
    (1);   //true para 1 o cualquier número diferente de cero (0)
    </li>
    <li>
    ("a"); //true para cualquier caracter o espacio en blanco en el string
    </li>
    <li>
    ([]); //true aunque el array esté vacío
    </li>
    <li>
    ({}); //true aunque el objeto esté vacío
    </li>
    <li>
    (function(){}); //Cualquier función es verdadera también
    </li>
</ol>


## Operadores: Asignación, comparación, y aritméticos


### _Operadores de operación_

<span>ayuda a hacer operaciones matematicas, o operadores binarios (un operador generando algo entre dos variables )</span>

<ul>
    <li>+</li>
    <li>-</li>
    <li>*</li>
    <li>/</li>
    <li>!</li> es una negación, operadores unitarios (1 solo operador con 1 solo valor)
</ul>

### _Operadores de asignación_

<span>ayuda a asiganar valores</span>

<ul>
    <li>=</li>
</ul>


### _Operadores de comparación_

<span>ayuda a comparar valores</span>

<ul>
    <li>==</li> valida el contenido del valor, asi no sea igual
    <li>===</li> valida que el el tipo y el valor sean estrictamente iguales
    <li>></li> valida si es mayor que
    <li><</li> valida si es menor que 
    <li>>=</li> valida si es mayor o igual que
    <li><=</li> valida si es menor o igual que 
</ul>

### _Operadores de condición_

<ul>
    <li>&&</li> validar si las dos variables son verdad, si las dos son verdad se cumple la condicion  
    <li>||</li>  si alguna de las dos es igual, entonces se cumple la condición
</ul>

### _otros_

<ul>
    <li>++</li> var edad = 40; edad ++ (aumenta en uno) return = 41
    <li>+= (numero)</li> se aumenta en el numero que se le diga
</ul>

<span>
Lecturas recomendadas

Expressions and operators - JavaScript | MDN

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
</span>

# Condicionales 

<ul>
    <li>if</li> validar si se cumple esta condición
    <li>else if</li> si la anterior no se cumple se puede validar con esta
    <li>else</li> si ninguna de la anterior se cumple ahi si se usa este
    <li>condicion ? true : false</li> operador ternario si la condicion es verdad (true) pasaria esto yy si no pasaria lo oto (false)
</ul>

### switch

<p>se usa para validar, etsableciendo ciertos casos y ademas es necesario poner un break 'para que cuando se aplicque un caso nos retorne lo establecido y que no siga de corrido</p>


# Arrays []

<p>Es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.</p>



<ul>
    <li>.lenght</li> devuelve la longitud del array.
    <li>[n]</li> devuelve la posicion que le digamos dentro del array n = # de la posicion que le digamos.
    <li>.push() </li>agrega elementos al final de array.
    <li>.pop()</li>  elimina un elemento del array.
    <li>.unshift()</li>  agrega un elemento al array, pero lo agrega en primer lugar.
    <li>.shift()</li>  elimina el elemento que está en el inicio del array.
    <li>.indexOf </li>  devuelve la posición de un elemento del array.
</ul>


# Loops 

<P>
Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:
</p>

<ul>
    <li>for -</li> recorre un bloque de código varias veces
    <li>for/in -</li> recorre las propiedades de un objeto
    <li>for/of - </li>recorre los valores de un objeto iterable
    <li>while - </li>recorre un bloque de código mientras se cumple una condición específica
    <li>do/while - </li>también recorre un bloque de código mientras se cumple una condición específica
</ul>    

