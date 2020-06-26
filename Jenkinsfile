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
    stage('archive master branch') {
      when {
        branch 'master'
      }
      steps {
        archiveArtifacts(artifacts: '', onlyIfSuccessful: true)
      }
    }
    stage('archive production branch') {
      when {
        branch 'production'
      }
      steps {
        archiveArtifacts(artifacts: '', onlyIfSuccessful: true)
      }
    }
  }
}
