pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'rmdir /s /q C:\\xampp\\htdocs\\Lib_FE'
                bat 'mkdir C:\\xampp\\htdocs\\Lib_FE'
                bat 'xcopy /E /I /Y build\\* C:\\xampp\\htdocs\\Lib_FE\\'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD thành công!'
        }
        failure {
            echo '❌ Thất bại, kiểm tra log.'
        }
    }
}
