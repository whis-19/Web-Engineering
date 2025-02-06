
//.forEach(fn): method executes a provided function once for each array element.

//.map(fn): method creates a new array with the results of calling a 
// provided function on every element in the calling array.


//.filter(fn): create new arrray by filtering out the true values from the array

//.reduce(fn): method applies a function against an accumulator and each element in the array

// charAt(int index) – Returns the character at the specified index.
// concat(String str) – Concatenates the specified string to the end of the current string.
// contains(CharSequence sequence) – Checks if the string contains the specified sequence of characters.
// endsWith(String suffix) – Checks if the string ends with the specified suffix.
// equals(Object obj) – Compares the string with another object to see if they are equal.
// equalsIgnoreCase(String anotherString) – Compares the string to another string, ignoring case.
// indexOf(int ch) – Returns the index of the first occurrence of the specified character.
// isEmpty() – Checks if the string is empty (i.e., has a length of 0).
// lastIndexOf(int ch) – Returns the index of the last occurrence of the specified character.
// length() – Returns the length (number of characters) of the string.
// replace(char oldChar, char newChar) – Replaces all occurrences of the specified character with a new character.
// replaceAll(String regex, String replacement) – Replaces all occurrences of a substring that matches the regular expression with the specified replacement.
// split(String regex) – Splits the string into an array of substrings based on the given regular expression.
// startsWith(String prefix) – Checks if the string starts with the specified prefix.
// substring(int beginIndex) – Returns a substring starting from the specified index.
// toLowerCase() – Converts all characters of the string to lowercase.
// toUpperCase() – Converts all characters of the string to uppercase.
// trim() – Removes leading and trailing whitespace from the string.
// valueOf(Object obj) – Returns the string representation of the specified object.
// matches(String regex) – Checks if the string matches the given regular expression.

// slice(int beginIndex, int endIndex) – Returns a new string that is a substring of the current string, starting
//  from beginIndex and ending at endIndex. (Similar to substring() but allows negative indices in some languages).

// split(String regex) – Splits the string based on the regular expression into an array of substrings.
//  (Can be considered functional as it returns a new list of substrings).


let result = "hello".chars()
                       .mapToObj(c -> (char)c)  // Convert int chars to Character
                       .map(c -> c.toString().toUpperCase()) // Uppercase each char
                       .collect(Collectors.joining()); // Collect back to string

let result = "hello".chars()
                       .mapToObj(c -> (char)c)
                       .filter(c -> c != 'l') // Remove 'l'
                       .collect(Collectors.joining());

"hello".chars()
      .mapToObj(c -> (char)c)
      .forEach(System.out::println); // Print each character


String result = "hello".chars()
      .mapToObj(c -> (char)c)
      .reduce("", (acc, c) -> acc + Character.toUpperCase(c));
