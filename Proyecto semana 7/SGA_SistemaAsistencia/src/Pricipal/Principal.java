/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Pricipal;

/**
 *
 * @author lenin
 */
public class Principal {
    public static void main(String[] args) {
        // Ejecuta la interfaz gráfica en el hilo de eventos de Swing
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new LoginFrame().setVisible(true); // Muestra la ventana de Login
            }
        });
    }
}
    
