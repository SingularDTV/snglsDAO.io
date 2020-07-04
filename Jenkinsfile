pipeline {
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '5', numToKeepStr: '5'))
  }
  agent {
    node {
      label 'ubuntu-18.04'
    }
  }
  stages {
    stage('master -> https://sngls.blaize.tech') {
      when {
        branch 'master'
      }
      steps {
        sshagent(['snglsdao-www']) {
          sh 'rsync -a --cvs-exclude --verbose --delete -e "ssh -o StrictHostKeyChecking=no" ./ snglsdao-www@test.blaize.tech:/var/www/sngls/'
        }
      }
    }
    stage('master -> https://stage.snglsdao.io') {
      when {
        branch 'master'
      }
      steps {
        sshagent(['snglsdao-www']) {
          sh 'rsync -a --cvs-exclude --verbose --delete -e "ssh -o StrictHostKeyChecking=no" ./ snglsdao-www@stage.snglsdao.io:/var/www/stage/'
        }
      }
    }
    stage('archive production branch') {
      when {
        branch 'production'
      }
      steps {
        archiveArtifacts(artifacts: '**', onlyIfSuccessful: true)
      }
    }
  }
}
