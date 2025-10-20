package Vistas;

import Modelo.Usuario;
import Vistas.EstudianteFrame;
import javax.swing.JOptionPane;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package Vistas;

import Modelo.Usuario;
import Vistas.DocenteFrame;
import Vistas.EstudianteFrame;
import java.awt.List;
import java.util.ArrayList;
import javax.swing.JOptionPane;

public class LoginFrame extends javax.swing.JFrame {
    private List<Usuario> listaUsuarios;

 
    public LoginFrame() {
        initComponents();
        cargarUsuariosDePrueba();
        llenarComboRoles();
        this.setTitle("Acceso al Sistema SGA-R");
        this.setLocationRelativeTo(null);
    }
    private void cargarUsuariosDePrueba(){
        listaUsuarios = new ArrayList<>();
        listaUsuarios.add(new Usuario("Docente1", "pass123", "Docente"));
        listaUsuarios.add(new Usuario("alumno2", "pass321", "Estudiante"));
        listaUsuarios.add(new Usuario("admin", "admin", "Docente"));
    }
    private void llenarComboRoles(){
        cmbRol.addItem("Docente");
        cmbRol.addItem("Estudiante");
        
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jPanel3 = new javax.swing.JPanel();
        txtUsuario = new javax.swing.JTextField();
        lblUsuario = new javax.swing.JLabel();
        btnLogin = new javax.swing.JButton();
        txtContraseña = new javax.swing.JTextField();
        cmbRol = new javax.swing.JComboBox<>();
        lblTitulo = new javax.swing.JLabel();
        lblRol = new javax.swing.JLabel();
        lblContraseña = new javax.swing.JLabel();

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 112, Short.MAX_VALUE)
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 173, Short.MAX_VALUE)
        );

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        txtUsuario.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtUsuarioActionPerformed(evt);
            }
        });

        lblUsuario.setText("Usuario:");

        btnLogin.setText("Acceso");
        btnLogin.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnLoginActionPerformed(evt);
            }
        });

        txtContraseña.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtContraseñaActionPerformed(evt);
            }
        });

        cmbRol.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));
        cmbRol.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cmbRolActionPerformed(evt);
            }
        });

        lblTitulo.setText("INICIO DE SESION");

        lblRol.setText("Rol:");

        lblContraseña.setText("Contraseña:");

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel3Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(btnLogin)
                .addGap(164, 164, 164))
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addGap(50, 50, 50)
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                .addComponent(txtContraseña, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 359, Short.MAX_VALUE)
                                .addComponent(lblUsuario, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 74, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(txtUsuario, javax.swing.GroupLayout.Alignment.LEADING))
                            .addComponent(lblContraseña, javax.swing.GroupLayout.PREFERRED_SIZE, 87, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(cmbRol, javax.swing.GroupLayout.PREFERRED_SIZE, 230, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(lblRol, javax.swing.GroupLayout.PREFERRED_SIZE, 73, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addGap(165, 165, 165)
                        .addComponent(lblTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, 104, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(12, Short.MAX_VALUE))
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addContainerGap(22, Short.MAX_VALUE)
                .addComponent(lblTitulo)
                .addGap(18, 18, 18)
                .addComponent(lblUsuario)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(txtUsuario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(12, 12, 12)
                .addComponent(lblContraseña)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(txtContraseña, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(12, 12, 12)
                .addComponent(lblRol)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cmbRol, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(22, 22, 22)
                .addComponent(btnLogin))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(14, 14, 14)
                .addComponent(jPanel3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(63, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(21, 21, 21)
                .addComponent(jPanel3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(16, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void txtUsuarioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtUsuarioActionPerformed
        // TODO add your handling code here:
        
    }//GEN-LAST:event_txtUsuarioActionPerformed

    private void cmbRolActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cmbRolActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_cmbRolActionPerformed

    private void txtContraseñaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtContraseñaActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtContraseñaActionPerformed

    private void btnLoginActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnLoginActionPerformed
   String usuario = txtUsuario.getText();
        // Obtiene la contraseña como String del JPasswordField
        // Obtiene el rol seleccionado del JComboBox
        String rolSeleccionado = (String) cmbRol.getSelectedItem();
        
        boolean accesoConcedido = false;
        String rolEncontrado = null;
        
        // 1. Validar campos no vacíos
        if (usuario.isEmpty() || contraseña.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Debe ingresar el usuario y la contraseña.", "Error de Entrada", JOptionPane.WARNING_MESSAGE);
            return;
        }

        // 2. Buscar credenciales en la lista simulada
        for (Usuario user : listaUsuarios) {
       Object contrasena = null;
            if (user.getUsername().equals(usuario) && 
                user.getPassword().equals(contrasena) &&
                user.getRol().equals(rolSeleccionado)) {
                
                accesoConcedido = true;
                rolEncontrado = user.getRol();
                break;
            }
        }
        
        // 3. Manejo del acceso y navegación
        if (accesoConcedido) {
            JOptionPane.showMessageDialog(this, "¡Bienvenido, " + usuario + "! Acceso como " + rolEncontrado + " concedido.", "Éxito", JOptionPane.INFORMATION_MESSAGE);
            
            // Lógica para abrir la ventana correspondiente al rol
            if (rolEncontrado.equals("Docente")) {
                // Instancia y muestra la ventana del Docente
                new DocenteFrame(usuario).setVisible(true); 
            } else if (rolEncontrado.equals("Estudiante")) {
                // Instancia y muestra la ventana del Estudiante
                new EstudianteFrame(usuario).setVisible(true);
            }
            
            this.dispose(); // Cierra la ventana de login
            
        } else {
            JOptionPane.showMessageDialog(this, "Credenciales inválidas. Verifique su usuario, contraseña y rol seleccionado.", "Error de Acceso", JOptionPane.ERROR_MESSAGE);
            txtContraseña.setText(""); // Limpia el campo de contraseña
        }
    }
    }//GEN-LAST:event_btnLoginActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(LoginFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(LoginFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(LoginFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(LoginFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
            new LoginFrame().setVisuible(true);
                
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnLogin;
    private javax.swing.JComboBox<String> cmbRol;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JLabel lblContraseña;
    private javax.swing.JLabel lblRol;
    private javax.swing.JLabel lblTitulo;
    private javax.swing.JLabel lblUsuario;
    private javax.swing.JTextField txtContraseña;
    private javax.swing.JTextField txtUsuario;
    // End of variables declaration//GEN-END:variables

