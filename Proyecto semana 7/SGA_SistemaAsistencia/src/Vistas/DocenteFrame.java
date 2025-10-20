/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package Vistas;

import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

    DocenteFrame(String usuario) {
    }
    DocenteFrame(String usuario) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    DocenteFrame(String usuario) {
    }
/**
 *
 * @author lenin
 */
public class DocenteFrame extends javax.swing.JFrame {

    private DefaultTableModel modeloTablaAsistencia;
    private DefaultTableModel modeloTablaRiesgo;
    
    // El nombre de usuario que hizo login
    private String usuarioDocente;
    public DocenteFrame(String usuario) {
        initComponents
                this.usuarioDocente = usuario;
        this.setTitle("Módulo Docente - Registro y Reportes SGA-R");
        lblBienvenido.setText("Bienvenido(a), Docente " + usuario + ".");
        this.setLocationRelativeTo(null); // Centra la ventana
        
        // Inicialización de tablas y datos
        inicializarTablaAsistencia();
        inicializarTablaRiesgo();
        cargarCursosSimulados();
    }

    private void inicializarTablaAsistencia() {
        // Asume que tblAsistencia es una JTable en el diseñador
        modeloTablaAsistencia = new DefaultTableModel(
            new Object[]{"ID Alumno", "Nombre", "Estado", "Marcar"}, 0 // 0 filas iniciales
        ) {
            // Se asegura de que la columna 3 (Marcar) sea editable (Checkbox)
            @Override
            public boolean isCellEditable(int row, int column) {
                // Permitimos editar la columna de estado y el checkbox para registrar
                return column == 3; 
            }
            // Define el tipo de dato para que la tabla muestre un Checkbox en la última columna
            @Override
            public Class getColumnClass(int column) {
                return (column == 3) ? Boolean.class : super.getColumnClass(column);
            }
        };
        tblAsistencia.setModel(modeloTablaAsistencia);
        cargarDatosSimuladosAsistencia();
    }
    
    private void inicializarTablaRiesgo() {
        // Asume que tblAlumnosRiesgo es otra JTable en el diseñador
        modeloTablaRiesgo = new DefaultTableModel(
            new Object[]{"ID Alumno", "Nombre", "Inasistencia %"}, 0
        ) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false; // Solo visualización
            }
        };
        tblAlumnosRiesgo.setModel(modeloTablaRiesgo);
    }
    
    private void cargarCursosSimulados() {
        // Simulación de carga de cursos
        cmbCurso.addItem("Programación I");
        cmbCurso.addItem("Matemáticas Avanzadas");
        cmbCurso.addItem("Bases de Datos");
    }

    private void cargarDatosSimuladosAsistencia() {
        // Simulación: cargar alumnos y su estado actual de asistencia
        modeloTablaAsistencia.addRow(new Object[]{"A001", "Ana Gómez", "PRESENTE", true});
        modeloTablaAsistencia.addRow(new Object[]{"A002", "Luis Pérez", "AUSENTE", false});
        modeloTablaAsistencia.addRow(new Object[]{"A003", "Marta Díaz", "PENDIENTE", false});
        modeloTablaAsistencia.addRow(new Object[]{"A004", "Juan Salas", "PRESENTE", true});
    }

    // --- Método btnGuardarActionPerformed (Botón Guardar) ---
    private void btnGuardarActionPerformed(java.awt.event.ActionEvent evt) {
        // Lógica de MODIFICACIÓN / REGISTRO
        int registrosGuardados = 0;
        for (int i = 0; i < modeloTablaAsistencia.getRowCount(); i++) {
            String idAlumno = modeloTablaAsistencia.getValueAt(i, 0).toString();
            Boolean marcado = (Boolean) modeloTablaAsistencia.getValueAt(i, 3);
            
            String nuevoEstado = marcado ? "PRESENTE" : "AUSENTE";
            
            // Si el estado ha cambiado o estaba pendiente, se guarda
            if (!modeloTablaAsistencia.getValueAt(i, 2).equals(nuevoEstado) || 
                 modeloTablaAsistencia.getValueAt(i, 2).equals("PENDIENTE")) {
                
                modeloTablaAsistencia.setValueAt(nuevoEstado, i, 2); 
                // Aquí iría el código real de guardar/actualizar en la base de datos
                registrosGuardados++;
            }
        }
        
        if (registrosGuardados > 0) {
             JOptionPane.showMessageDialog(this, 
                 "Asistencia de " + cmbCurso.getSelectedItem() + " actualizada: " + registrosGuardados + " registros.", 
                 "Guardado Exitoso", JOptionPane.INFORMATION_MESSAGE);
        } else {
             JOptionPane.showMessageDialog(this, 
                 "No se detectaron cambios para guardar.", 
                 "Información", JOptionPane.WARNING_MESSAGE);
        }
    }
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        lblBienvenido = new javax.swing.JLabel();
        cmbCurso = new javax.swing.JComboBox<>();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblAsistencia = new javax.swing.JTable();
        btnReporte = new javax.swing.JButton();
        btnGuardar = new javax.swing.JButton();
        jScrollPane2 = new javax.swing.JScrollPane();
        tblAlumnosRiesgo = new javax.swing.JTable();
        lblCurso = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        lblBienvenido.setText("Bienvenido");

        cmbCurso.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));

        tblAsistencia.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane1.setViewportView(tblAsistencia);

        btnReporte.setText("Reporte");
        btnReporte.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnReporteActionPerformed(evt);
            }
        });

        btnGuardar.setText("Guardar");

        tblAlumnosRiesgo.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane2.setViewportView(tblAlumnosRiesgo);

        lblCurso.setText("Cursos:");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(315, 315, 315)
                        .addComponent(lblBienvenido, javax.swing.GroupLayout.PREFERRED_SIZE, 79, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(lblCurso, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 324, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 324, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addContainerGap(140, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(cmbCurso, javax.swing.GroupLayout.PREFERRED_SIZE, 138, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 0, Short.MAX_VALUE))))
            .addGroup(layout.createSequentialGroup()
                .addGap(131, 131, 131)
                .addComponent(btnGuardar)
                .addGap(250, 250, 250)
                .addComponent(btnReporte)
                .addGap(0, 0, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(lblBienvenido))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(36, 36, 36)
                        .addComponent(lblCurso)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(cmbCurso, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 230, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 230, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(30, 30, 30)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnGuardar)
                    .addComponent(btnReporte))
                .addContainerGap(175, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnReporteActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnReporteActionPerformed
        modeloTablaRiesgo.setRowCount(0);
        modeloTablaRiesgo.addRow(new Object[]{"A001", "Ana Gómez", "25.00%"});
        modeloTablaRiesgo.addRow(new Object[]{"A004", "Juan Salas", "32.50%"});
        if (modeloTablaRiesgo.getRowCount() > 0) {
             JOptionPane.showMessageDialog(this, 
                 "Reporte generado. Hay " + modeloTablaRiesgo.getRowCount() + " alumnos en riesgo de reprobar por inasistencia.", 
                 "Reporte de Riesgo", JOptionPane.WARNING_MESSAGE);
        } else {
             JOptionPane.showMessageDialog(this, 
                 "No hay alumnos con riesgo de inasistencia en este curso.", 
                 "Reporte de Riesgo", JOptionPane.INFORMATION_MESSAGE);
        }
    
    }//GEN-LAST:event_btnReporteActionPerformed

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
            java.util.logging.Logger.getLogger(DocenteFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(DocenteFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(DocenteFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(DocenteFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new DocenteFrame().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnGuardar;
    private javax.swing.JButton btnReporte;
    private javax.swing.JComboBox<String> cmbCurso;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JLabel lblBienvenido;
    private javax.swing.JLabel lblCurso;
    private javax.swing.JTable tblAlumnosRiesgo;
    private javax.swing.JTable tblAsistencia;
    // End of variables declaration//GEN-END:variables

