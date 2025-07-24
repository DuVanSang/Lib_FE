pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\deploy\\Lib_FE'
    }

    stages {
        stage('Deploy static site') {
            steps {
                bat '''
                    if not exist %DEPLOY_DIR% (
                        mkdir %DEPLOY_DIR%
                    )
                    xcopy /E /I /Y * %DEPLOY_DIR%\\
                '''
            }
        }

        stage('Start local server') {
            steps {
                bat '''
                    taskkill /F /IM node.exe >nul 2>&1 || echo Không có node đang chạy
                    start /B cmd /c "cd %DEPLOY_DIR% && serve -l 8000"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Website đang chạy tại http://localhost:8000'
        }
        failure {
            echo '❌ Deploy thất bại.'
        }
    }
}
