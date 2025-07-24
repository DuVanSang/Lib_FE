pipeline {
    agent any

    stages {
        stage('Deploy static site') {
            steps {
                bat 'rmdir /s /q C:\\xampp\\htdocs\\Lib_FE'
                bat 'mkdir C:\\xampp\\htdocs\\Lib_FE'
                bat 'xcopy /E /I /Y * C:\\xampp\\htdocs\\Lib_FE\\'
            }
        }
    }

    post {
        success {
            echo '✅ Website đã deploy lên localhost thành công!'
        }
        failure {
            echo '❌ Có lỗi xảy ra khi deploy.'
        }
    }
}
