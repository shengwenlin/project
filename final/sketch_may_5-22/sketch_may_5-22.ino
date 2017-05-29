#define buttonPin 7

boolean prev_button_value = LOW;

void setup() {
  pinMode(buttonPin, INPUT );
  Serial.begin(9600);
}

void loop() {
  boolean button_value = digitalRead( buttonPin );

  if ( button_value == HIGH && prev_button_value == LOW ) {
    Serial.print( "1" );
  }

  prev_button_value = button_value;
}
