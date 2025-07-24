pipeline {
    agent any


    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/html/*'
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD thành công!'
        }
        failure {
            echo '❌ Thất bại, kiểm tra lại log.'
        }
    }
}
