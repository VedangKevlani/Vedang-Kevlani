import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'
import projects from '../Projects/projectsData'

// Styles
const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: 'Helvetica' },
  section: { marginBottom: 20 },
  heading: { fontSize: 18, marginBottom: 10 },
  subHeading: { fontSize: 14, marginBottom: 5 },
  projectTitle: { fontSize: 13, fontWeight: 'bold' },
  tech: { fontSize: 11, color: '#6b7cff', marginBottom: 5 },
  outcomes: { marginLeft: 10, fontSize: 11 },
})

export default function ResumePDF() {
  return (
    <PDFDownloadLink
      document={
        <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.heading}>Vedang Kevlani</Text>
              <Text>Data Scientist | Developer</Text>
              <Text>Email: kevlanivedang28@gmail.com</Text>
              <Text>LinkedIn: linkedin.com/in/vedang-kevlani</Text>
              <Text>GitHub: github.com/VedangKevlani</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Projects</Text>
              {projects.map((p) => (
                <View key={p.id} style={{ marginBottom: 10 }}>
                  <Text style={styles.projectTitle}>{p.title} ({p.year})</Text>
                  <Text>{p.role}</Text>
                  <Text style={styles.tech}>{p.tech.join(', ')}</Text>
                  <Text style={styles.outcomes}>• {p.outcomes.join('\n• ')}</Text>
                </View>
              ))}
            </View>
          </Page>
        </Document>
      }
      fileName="Vedang_Kevlani_Resume.pdf"
    >
      {({ loading }) => (loading ? 'Preparing Resume...' : 'Download Resume')}
    </PDFDownloadLink>
  )
}
