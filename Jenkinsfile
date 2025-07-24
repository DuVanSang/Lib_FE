pipeline {
    agent any

    stages {
        stage('Deploy static site') {
            steps {
                bat '''
                    if not exist C:\\xampp\\htdocs (
                        mkdir C:\\xampp\\htdocs
                    )
                    if exist C:\\xampp\\htdocs\\Lib_FE (
                        rmdir /s /q C:\\xampp\\htdocs\\Lib_FE
                    )
                    mkdir C:\\xampp\\htdocs\\Lib_FE
                    xcopy /E /I /Y * C:\\xampp\\htdocs\\Lib_FE\\
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Website đã deploy thành công!'
        }
        failure {
            echo '❌ Có lỗi xảy ra khi deploy.'
        }
    }
}
