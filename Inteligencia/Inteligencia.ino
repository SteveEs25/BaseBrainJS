int SensorTMP = A0;
int SensorViento = A1;
int TemperaturaAnterior = 0;
int VientoAnterior = 0;

void setup() {
  pinMode(SensorTMP, INPUT);
  pinMode(SensorViento, INPUT);
  Serial.begin(9600);

}

void loop() {
  int Temperatura = map(analogRead(SensorTMP), 0, 1024, 18, 44);
  int Viento  = map(analogRead(SensorViento), 0, 1024, 18, 70);
  if((Temperatura != TemperaturaAnterior) || (Viento != VientoAnterior))
  {
    TemperaturaAnterior = Temperatura;
    VientoAnterior = Viento;
    
    Serial.print("V");
    Serial.print(Viento);
    Serial.print("T");
    Serial.print(Temperatura);
    Serial.println();
  }
  delay(1000);
}
